# Authentication Service Template

โครงสร้างพื้นฐานสำหรับการพัฒนาแอปพลิเคชันที่ต้องการระบบยืนยันตัวตน พร้อมด้วยหน้าเว็บไซต์สำหรับผู้ใช้งาน

## คุณสมบัติหลัก

- 🔐 ระบบยืนยันตัวตนที่ปลอดภัย
- 📝 ระบบลงทะเบียนผู้ใช้งาน
- 🎨 หน้า UI สวยงามด้วย Material-UI
- ⚛️ Frontend พัฒนาด้วย React + TypeScript
- 🚀 Backend พัฒนาด้วย Spring Boot
- 🏗️ โครงสร้างโค้ดที่เป็นระเบียบ พร้อมขยาย

## เทคโนโลยีที่ใช้

### Frontend
- React
- TypeScript
- Material-UI
- Vite
- Axios

### Backend
- Java 17+
- Spring Boot
- Spring Security
- MySQL
- Maven

## การติดตั้ง

1. Clone โปรเจค:
```bash
git clone <repository-url>
cd authentication-service
```

2. ติดตั้ง Dependencies สำหรับ Frontend:
```bash
cd frontend
npm install
```

3. ตั้งค่าฐานข้อมูล MySQL:
- สร้างฐานข้อมูลชื่อ `newstradingapp`
- อัพเดทการตั้งค่าการเชื่อมต่อใน `src/main/resources/application.properties`

4. รัน Backend:
```bash
./mvnw spring-boot:run
```

5. รัน Frontend ในโหมดพัฒนา:
```bash
cd frontend
npm run dev
```

## โครงสร้างโปรเจค

```
authentication-service/
├── frontend/                # React Frontend
│   ├── src/
│   │   ├── pages/          # หน้าต่างๆ
│   │   ├── App.tsx         # Root Component
│   │   └── theme.ts        # ธีม MUI
│   └── vite.config.ts      # การตั้งค่า Vite
│
└── src/                    # Spring Boot Backend
    └── main/
        ├── java/.../
        │   ├── config/     # การตั้งค่า Spring
        │   ├── controller/ # REST Controllers
        │   ├── dto/        # Data Transfer Objects
        │   ├── model/      # Entity Classes
        │   ├── repository/ # Data Access Layer
        │   └── service/    # Business Logic
        └── resources/
            └── application.properties  # การตั้งค่า Spring Boot
```

## การใช้งานเป็น Template

1. สามารถ Fork โปรเจคนี้เพื่อเริ่มต้นโปรเจคใหม่
2. ปรับแต่งโมเดลผู้ใช้งานตามความต้องการในไฟล์ `User.java`
3. เพิ่ม Entity และ Feature ใหม่ตามต้องการ
4. ปรับแต่งหน้า UI ให้เข้ากับแบรนด์ของคุณ

## Security

- ใช้ Spring Security ในการจัดการการเข้าถึง
- รหัสผ่านถูกเข้ารหัสก่อนจัดเก็บ
- CORS และ CSRF Protection
- การตรวจสอบข้อมูลนำเข้า (Input Validation)

## การพัฒนาต่อ

- [ ] เพิ่มระบบ JWT Authentication
- [ ] เพิ่มระบบ Role-based Authorization
- [ ] เพิ่มระบบ Email Verification
- [ ] เพิ่มระบบ Password Reset
- [ ] เพิ่มระบบ OAuth (Google, Facebook)

## License

MIT License - สามารถนำไปใช้งานและดัดแปลงได้อย่างอิสระ

## ผู้พัฒนา

สร้างโดย Boonyarit Pornuan
