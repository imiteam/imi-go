import { useCallback } from 'react';
import { useProfileStore } from '../../lib/useProfileStore';

const usePaymentRequest = () => {
 const SetPaymentUrl = useProfileStore((state) => state.SetPaymentUrl);

 const requestPaymentUrl = useCallback(async (amount : number, description : string, user_id : string, metadata : {
    plan : string
    tokens : number
    yearly : boolean
  }, is_subscription : boolean) => {
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
          is_subscription,
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка при выполнении запроса');
      }

      const data = await response.json();
      SetPaymentUrl(data.Model.Url);
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
 }, [SetPaymentUrl]);

 return requestPaymentUrl;
};

export default usePaymentRequest;