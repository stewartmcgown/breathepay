import React, { useEffect } from 'react';
import theme from 'theme/theme';
import { style } from 'typestyle';

const FORM_ID = 'card-payment-form__react_id';

export default () => {
  useEffect(() => {
    if (process.browser) {
      const auto = {
        autoSetup: true,
        autoSubmit: true,
      };
      try {
        (window as any).jQuery = (window as any).$;

        const hf = (window as any).$(`#${FORM_ID}`).hostedForm(auto);

        // Stop Breathe SDK from hijacking window and forcing a redirect
        document.querySelector<HTMLFormElement>(`#${FORM_ID}`)!.submit = () => {
          const values = document.querySelector(
            `#${FORM_ID} input[name=paymentToken]`,
          );

          console.dir(values); // The payment token
        };
      } catch (e) {
        // Add your exception handling code here
        console.log(e);
      }
    }
  }, []);

  return (
    <>
      <form
        id={FORM_ID}
        className={styles.cardNumber}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: 16,
        }}
      >
        <input
          type="hidden"
          name="callbackUrl"
          value="https://example.com/callback/breathe"
        />
        <input type="hidden" name="merchantID" value=" 113811" style={{}} />
        <input
          type="hostedfield:cardNumber"
          placeholder="**** **** **** ****"
          id="form-number"
          style={{
            marginRight: 8,
            flex: 1,
            minWidth: '350px',
          }}
        />
        <input
          type="hostedfield:cardExpiryDate"
          placeholder="MM/YY"
          style={{
            flex: 0.3,
            marginRight: 8,
          }}
        />
        <br />
        <input
          type="hostedfield:cardCVV"
          placeholder="***"
          style={{
            flex: 0.1,
            marginRight: 8,
          }}
        />
        <div
          style={{
            flexBasis: '100%',
            height: '1px',
            margin: '16px 0',
            backgroundColor: 'lightgrey',
          }}
        />
        <input
          type="submit"
          value="Place Booking"
          style={{
            cursor: 'pointer',
            backgroundColor: theme.colors.primary,
            border: 'none',
            padding: 8,
            borderRadius: 4,
            color: 'white',
          }}
        />
      </form>
    </>
  );
};

const styles = {
  cardNumber: style({
    font: '15px Arial',
    $nest: {
      '&>div.hostedfield': {
        font: '15px Lato',
        border: '1px solid lightgrey',
        borderRadius: 4,
        padding: '2px 4px',
      },
    },
  }),
};
