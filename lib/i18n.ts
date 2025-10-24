import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'chat.title': 'Ask KritRNA',
      'chat.placeholder': 'Ask about our technology, research, or rare diseases...',
      'chat.send': 'Send',
      'chat.thinking': 'Thinking...',
      'chat.error': 'Sorry, something went wrong. Please try again.',
      'language': 'Language',
    }
  },
  hi: {
    translation: {
      'chat.title': 'KritRNA से पूछें',
      'chat.placeholder': 'हमारी तकनीक, अनुसंधान या दुर्लभ बीमारियों के बारे में पूछें...',
      'chat.send': 'भेजें',
      'chat.thinking': 'सोच रहे हैं...',
      'chat.error': 'क्षमा करें, कुछ गलत हुआ। कृपया पुनः प्रयास करें।',
      'language': 'भाषा',
    }
  },
  bn: {
    translation: {
      'chat.title': 'KritRNA কে জিজ্ঞাসা করুন',
      'chat.placeholder': 'আমাদের প্রযুক্তি, গবেষণা বা বিরল রোগ সম্পর্কে জিজ্ঞাসা করুন...',
      'chat.send': 'পাঠান',
      'chat.thinking': 'চিন্তা করছি...',
      'chat.error': 'দুঃখিত, কিছু ভুল হয়েছে। আবার চেষ্টা করুন।',
      'language': 'ভাষা',
    }
  },
  mr: {
    translation: {
      'chat.title': 'KritRNA ला विचारा',
      'chat.placeholder': 'आमच्या तंत्रज्ञान, संशोधन किंवा दुर्मिळ आजारांबद्दल विचारा...',
      'chat.send': 'पाठवा',
      'chat.thinking': 'विचार करत आहे...',
      'chat.error': 'माफ करा, काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.',
      'language': 'भाषा',
    }
  },
  ta: {
    translation: {
      'chat.title': 'KritRNA விடம் கேளுங்கள்',
      'chat.placeholder': 'எங்கள் தொழில்நுட்பம், ஆராய்ச்சி அல்லது அரிய நோய்கள் பற்றி கேளுங்கள்...',
      'chat.send': 'அனுப்பு',
      'chat.thinking': 'சிந்தித்துக்கொண்டிருக்கிறது...',
      'chat.error': 'மன்னிக்கவும், ஏதோ தவறு நடந்தது. மீண்டும் முயற்சிக்கவும்.',
      'language': 'மொழி',
    }
  },
  te: {
    translation: {
      'chat.title': 'KritRNA ని అడగండి',
      'chat.placeholder': 'మా సాంకేతికత, పరిశోధన లేదా అరుదైన వ్యాధుల గురించి అడగండి...',
      'chat.send': 'పంపండి',
      'chat.thinking': 'ఆలోచిస్తోంది...',
      'chat.error': 'క్షమించండి, ఏదో తప్పు జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి.',
      'language': 'భాష',
    }
  },
  kn: {
    translation: {
      'chat.title': 'KritRNA ಅನ್ನು ಕೇಳಿ',
      'chat.placeholder': 'ನಮ್ಮ ತಂತ್ರಜ್ಞಾನ, ಸಂಶೋಧನೆ ಅಥವಾ ಅಪರೂಪದ ರೋಗಗಳ ಬಗ್ಗೆ ಕೇಳಿ...',
      'chat.send': 'ಕಳುಹಿಸಿ',
      'chat.thinking': 'ಯೋಚಿಸುತ್ತಿದೆ...',
      'chat.error': 'ಕ್ಷಮಿಸಿ, ಏನೋ ತಪ್ಪಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      'language': 'ಭಾಷೆ',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;