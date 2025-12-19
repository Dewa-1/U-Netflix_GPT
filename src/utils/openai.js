import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,               //ye line isliye kyunki hum browser me  frontend me hi openAI API call kr rhe hai
                                               //usually yr backend me krte hai security k liye
});

export default openai;