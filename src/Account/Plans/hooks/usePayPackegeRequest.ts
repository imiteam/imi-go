import { useCallback } from 'react';
import { useProfileStore } from '../../lib/useProfileStore';

const usePaymentPackegeRequest = () => {
 const SetPaymentPackegeUrl = useProfileStore((state) => state.SetPaymentPackegeUrl);

 const requestPaymentPackegeUrl = useCallback(async (  isSubscriber: boolean | null,amount : number, description : string, user_id : string, metadata : {
    plan : string
    tokens : number
    yearly: boolean
  }) => {
    if( !isSubscriber){
      return
    }
    try {
      const response = await fetch('https://api.imigo.ai/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          description,
          user_id,
          metadata,
          is_subscription: false
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка при выполнении запроса');
      }

      const data = await response.json();
      SetPaymentPackegeUrl(data.Model.Url);
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
 }, [SetPaymentPackegeUrl]);

 return requestPaymentPackegeUrl;
};

export default usePaymentPackegeRequest;