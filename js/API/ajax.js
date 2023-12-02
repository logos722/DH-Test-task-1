const serverUrl = 'https://jsonplaceholder.typicode.com/posts';

async function sendDataToServer(data) {
  try {
    const response = await fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    throw new Error('Ошибка при отправке данных на сервер');
  }
}

function handleServerResponse(response) {
  if (response && response.status === 'success') {
    alert('Форма успешно отправлена!');
  } else {
    alert('Произошла ошибка при отправке формы.');
  }
}

export {sendDataToServer, handleServerResponse}