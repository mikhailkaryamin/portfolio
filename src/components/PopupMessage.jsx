import React from 'react';
import Pulse from 'react-reveal/Pulse';
import Shake from 'react-reveal/Shake';

import { PopupMessage as Message } from '../consts';

function PopupMessage ({data, handleMessageClose}) {
  const {
    prefix,
    text,
  } = data;

  const isSuccuss = prefix === Message.SUCCESS.prefix;
  const isError = prefix === Message.ERROR.prefix;

  function getMarkupPopupMessage() {
    return (
      <div className={`popup-message ${prefix ? `popup-message--${prefix}` : ``}`}>
        <button className="popup-message__button" onClick={() => handleMessageClose(false)}>
          <span className="visually-hidden">
            Закрыть
          </span>
        </button>
        <span className="popup-message__text">
          {text}
        </span>
      </div>
    )
  }

  return (
    <>
      {isSuccuss && (
        <Pulse>
          {getMarkupPopupMessage()}
        </Pulse>
      )}

      {isError && (
        <Shake>
          {getMarkupPopupMessage()}
        </Shake>
      )}
    </>
  )
}

export default PopupMessage;