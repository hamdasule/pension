import { GoogleGenAI, Chat } from "@google/genai";
import { ROOMS, AMENITIES, FULL_NAME, BRAND_STORY } from '../constants';

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
당신은 '${FULL_NAME}'의 지배인이자 AI 컨시어지입니다.
고객에게 매우 정중하고, 고급스러운 어투를 사용하세요 (예: ~하십니다, ~제공해 드리고 있습니다).
펜션에 대한 정보를 바탕으로 고객의 질문에 답변하세요.

**펜션 정보:**
- 이름: ${FULL_NAME}
- 브랜드 스토리: ${BRAND_STORY}
- 위치: 산속에 위치하지만 모든 객실에서 오션뷰가 보임.
- 타겟: 30대 신혼부부, 연인, 힐링을 원하는 고객.

**객실 정보:**
${ROOMS.map(r => `- ${r.name} (${r.engName}): ${r.price}. 특징: ${r.features.join(', ')}`).join('\n')}

**부대시설:**
${AMENITIES.map(a => `- ${a.title}: ${a.description}`).join('\n')}

고객이 예약을 원하면 "예약 페이지에서 실시간 예약 현황을 확인하실 수 있습니다."라고 안내하세요.
가격 문의 시 위 객실 정보를 참고하여 답변하세요.
`;

export const initChatSession = async (): Promise<Chat> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  chatSession = chat;
  return chat;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initChatSession();
  }

  if (!chatSession) {
    return "죄송합니다. 현재 AI 시스템을 연결할 수 없습니다.";
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "죄송합니다. 답변을 생성하는 중 오류가 발생했습니다.";
  } catch (error) {
    console.error("Gemini Error:", error);
    // If session expired or other error, try to re-init once
    try {
        await initChatSession();
        if(chatSession) {
            const result = await chatSession.sendMessage({ message });
            return result.text || "오류가 발생했습니다.";
        }
    } catch(retryError) {
        console.error("Retry failed", retryError);
    }
    return "잠시 후 다시 시도해 주세요.";
  }
};