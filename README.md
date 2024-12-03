
```markdown
# Oddiy TCP Server (Node.js yordamida)

Ushbu loyiha Node.js’ning ichki `net` moduli yordamida qurilgan oddiy TCP serverdir. Server HTTP so‘rovlarini qabul qiladi, kelgan ma’lumotlarni qayta ishlaydi va JSON formatida javob yuboradi. Bu loyiha TCP protokoli va past darajadagi tarmoq kommunikatsiyasini tushunish uchun foydalidir.

---

## Xususiyatlar

- TCP ulanishlarni qabul qiladi.
- HTTP so‘rovlarini tahlil qiladi va qayta ishlaydi.
- JSON formatida HTTP javoblarini yuboradi.
- Xatolarni boshqarish va ulanishlarni yopishda samarali ishlaydi.

---

## O‘rnatish

1. Repozitoriyadan nusxa oling:

   ```bash
   git clone https://github.com/Engineer-Ramziddin/simple-tcp-server.git
   ```

2. Loyihaning katalogiga o‘ting:

   ```bash
   cd simple-tcp-server
   ```

3. Agar Node.js o‘rnatilmagan bo‘lsa, uni [shu yerda](https://nodejs.org/) o‘rnating.

---

## Foydalanish

1. Serverni ishga tushiring:

   ```bash
   node server.js
   ```

2. Server `8080` portda ishlay boshlaydi:

   ```
   TCP server 8080 portida ishlayapti...
   ```

3. **Postman**, **curl**, yoki veb brauzer yordamida serverga so‘rov yuboring. Masalan, `curl` yordamida:

   ```bash
   curl -X POST http://localhost:8080 -d '{"name":"Ali"}' -H "Content-Type: application/json"
   ```

4. Server javob beradi:

   ```json
   {
       "message": "Salom, sizning ma'lumotingiz qabul qilindi!"
   }
   ```

---

## Kodning Izohi

1. **Serverni yaratish:**
   `net.createServer()` funksiyasi TCP serverini yaratadi va ulanishlarni qabul qiladi.

2. **Ma'lumotni qayta ishlash:**
   Ma’lumot kelganda, server HTTP so‘rovini tahlil qiladi, body qismini ajratadi va uni qayta ishlaydi.

3. **HTTP javobi:**
   Server `200 OK` holat kodi bilan javob yuboradi va mijozga JSON formatdagi xabarni qaytaradi.

4. **Xatolarni boshqarish:**
   So‘rovni qayta ishlash yoki socket bilan bog‘liq xatolar logda ko‘rsatiladi va foydalanuvchi uchun tegishli javob qaytariladi.

---

## Loyihaning Tuzilishi

```plaintext
simple-tcp-server/
├── server.js   # Asosiy server kodi
├── README.md   # Loyiha uchun hujjat
```

---

## Hissa qo‘shish

Loyihaga qo‘shgan hissangiz mamnuniyat bilan qabul qilinadi! Agar xato topsangiz yoki yangi xususiyat qo‘shmoqchi bo‘lsangiz, iltimos, issue yarating yoki pull request yuboring.

---

## Litsenziya

Ushbu loyiha MIT litsenziyasi ostida taqdim etilgan. Batafsil ma’lumotni [LICENSE](LICENSE) faylidan bilib olishingiz mumkin.


# TCP Serverning Apparat Darajasida Ishlash Jarayoni

Ushbu hujjat yuqoridagi TCP server dasturi qanday qilib apparat va tarmoq darajasida ishlashini tushuntiradi. Bu ma'lumot TCP/IP modeli va qurilmalar o‘rtasidagi aloqa haqida chuqurroq tushuncha beradi.

---

## Ishlash Bosqichlari

### 1. **Mijoz Qurilmasi (Smartfon yoki Kompyuter)**

- **Dastur:**
  Brauzer (masalan, Google Chrome) yoki HTTP so‘rov yuboruvchi vosita (masalan, Postman, `curl`).

- **Jarayon:**
  1. Brauzer foydalanuvchi kiritgan URL-ni (masalan, `http://localhost:8080`) DNS orqali tahlil qiladi va IP manzilni topadi.
  2. Tarmoq stakida HTTP so‘rov TCP/IP protokol stack yordamida paketlarga bo‘linadi.
  3. Paketlar Wi-Fi yoki mobil tarmoq orqali uzatiladi.

- **Qurilmalar:**
  - **NIC (Tarmoq Interfeysi Kartasi):**
    Paketlarni qurilmaning Wi-Fi yoki mobil adapteri orqali yuboradi.
  - **Router:**
    Paketlarni internetga yo‘naltiradi.

---

### 2. **Tarmoq Qurilmalari (Internet)**

- **Jarayon:**
  1. Paketlar marshrutizatsiya qilish jarayoni orqali mijozdan serverga uzatiladi.
  2. Har bir router IP manzilga asoslanib paketlarni to‘g‘ri yo‘nalishga yuboradi.

- **Qurilmalar:**
  - **Routerlar:**
    Paketlarni to‘g‘ri yo‘nalishga uzatadi.
  - **Modemlar va Provayderlar:**
    Internet ulanishini ta’minlaydi.

---

### 3. **Server Qurilmasi (Ubuntu Server)**

- **NIC (Tarmoq Interfeysi Kartasi):**
  Paketlarni qabul qiladi va server operatsion tizimiga uzatadi.

- **TCP/IP Stack:**
  1. Paketlarni yig‘adi va to‘liq TCP segmentiga birlashtiradi.
  2. TCP segmentdan HTTP so‘rovni ajratadi va dasturga yuboradi.

- **Dastur (Node.js):**
  1. `net` moduli TCP soketlarni boshqaradi.
  2. HTTP so‘rov tahlil qilinadi (header va body qismlarga bo‘linadi).
  3. JavaScript kodi yordamida javob tayyorlanadi.
  4. Javob HTTP formatida paketlarga bo‘linadi va tarmoq orqali yuboriladi.

---

### 4. **Javob Qaytishi**

- **Serverdan Javob:**
  1. Paketlar TCP/IP stack orqali mijoz manziliga yo‘naltiriladi.
  2. NIC yordamida paketlar tarmoqqa yuboriladi.

- **Mijoz Qurilmasi:**
  1. Paketlar qabul qilinadi va TCP/IP stack orqali yig‘iladi.
  2. HTTP javob brauzerga uzatiladi.
  3. Brauzer javobni (masalan, JSON ma’lumotni) foydalanuvchiga ko‘rsatadi.

---

## Tizimda Ishlatilgan Apparat

### 1. **Mijoz Qurilmasi**
- **Processor (CPU):** HTTP so‘rovni tayyorlash va yuborishni boshqaradi.
- **RAM:** Tarmoq stack va brauzer dasturi ma’lumotlarini saqlaydi.
- **NIC:** Paketlarni tarmoqqa yuboradi va qabul qiladi.

### 2. **Tarmoq Qurilmalari**
- **Router:** Paketlarni marshrutizatsiya qilish uchun ishlatiladi.
- **Switch:** Tarmoqdagi paketlarni ichki qurilmalarga yo‘naltiradi.

### 3. **Server Qurilmasi**
- **Processor (CPU):** TCP server kodini bajaradi va ma’lumotni qayta ishlaydi.
- **RAM:** Dastur ma’lumotlarini saqlaydi (so‘rovlar va javoblar uchun).
- **Hard Disk (HDD/SSD):** Node.js va dastur fayllarini saqlaydi.
- **NIC:** Paketlarni qabul qiladi va mijozga javobni yuboradi.

---

## Tarmoq Modellari

TCP/IP modeliga asoslangan jarayonlar:

1. **Application Layer:**
   - HTTP so‘rovni brauzer tayyorlaydi.
   - Node.js HTTP javobni qayta ishlaydi.

2. **Transport Layer:**
   - TCP protokoli so‘rovlarni segmentlarga bo‘ladi va ularni manzilga uzatadi.

3. **Internet Layer:**
   - IP protokoli paketlarni manzilga yo‘naltiradi.

4. **Link Layer:**
   - NIC orqali fizik darajada paketlarni uzatadi.

---

## Diagramma

```plaintext
[Mijoz Qurilmasi] ---> [Router] ---> [Internet] ---> [Server NIC] ---> [Node.js Dasturi]
      HTTP So'rov            Paketlarni          Paketlarni           Ma'lumotni qayta
    yuboradi (Brauzer)       yo'naltiradi        yig'adi              ishlaydi va javob qaytaradi
