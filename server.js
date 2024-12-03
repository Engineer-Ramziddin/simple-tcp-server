// net moduli orqali TCP server yaratish
const net = require('net');

// TCP server yaratamiz
const server = net.createServer((socket) => {
  console.log('Yangi ulanish o\'rnatildi.');

  // Ma'lumot qabul qilish
  socket.on('data', (data) => {
    console.log('Kelgan ma\'lumot:', data.toString());

    try {
      // HTTP so'rovni tahlil qilish
      const requestData = data.toString();
      const [headers, body] = requestData.split('\r\n\r\n'); // So'rovni ajratamiz

      console.log('Body:', body); // JSON ma'lumotlarni ko'rish

      // HTTP javobni shakllantirish
      const responseBody = JSON.stringify({
        message: 'Salom, sizning ma\'lumotingiz qabul qilindi!',
      });
      const responseHeaders =
        `HTTP/1.1 200 OK\r\n` +
        `Content-Type: application/json\r\n` +
        `Content-Length: ${Buffer.byteLength(responseBody)}\r\n\r\n`;

      // Javobni yuborish
      socket.write(responseHeaders + responseBody);
    } catch (error) {
      console.error('So\'rovni qayta ishlashda xatolik:', error);

      // Xato javobini yuborish
      const errorBody = JSON.stringify({
        message: 'Xato: So\'rovni qayta ishlashda muammo yuz berdi',
      });
      const errorHeaders =
        `HTTP/1.1 500 Internal Server Error\r\n` +
        `Content-Type: application/json\r\n` +
        `Content-Length: ${Buffer.byteLength(errorBody)}\r\n\r\n`;

      socket.write(errorHeaders + errorBody);
    } finally {
      socket.end(); // Ulanishni yopish
    }
  });

  // Xatoliklarni ushlash
  socket.on('error', (err) => {
    console.error('Xatolik:', err);
  });

  // Ulanish yopilganda log yozamiz
  socket.on('end', () => {
    console.log('Ulanish yopildi.');
  });
});


// Serverni 8080-portda ishga tushiramiz
server.listen(8080, () => {
  console.log('TCP server 8080 portida ishlayapti...');
});