//นำเข้า   วิว   ข้อความ  จาก
import { Image, StyleSheet, Text, View } from "react-native";

//ส่งออก เริ้มต้น    ฟังก์ชัน   ชื่อฟังก์ชัน
export default function App() {
    return (
        //.    ใส่สไตล์ตกแต่ง
        <View style={myStyle.container}>

            {/* แสดงภาพจากไฟล์ */}
            <Image
                source={require('@/assets/images/Phasu.jpg')}
                style={{
                    width: 200, //กวา้ง
                    height: 200, //สูง
                    borderRadius: 100, //ความโค้งของมุม
                    borderWidth: 10, //ความกว้างของโค้ง
                    borderColor: "yellow" //สีของขอบ
                }}

            />
            {/* แสดงข้อความ */}
            <Text style={myStyle.title}>Phasu Nokprasert</Text>
            <Text>ภสุ นกประเสริฐ🦤</Text>

            <View style={myStyle.container1}>
                <Text>ห้อง BIT.1/5 เลขที่9</Text>
                <Text>Email:Phasu.Nokprasert@e-tech.ac.th</Text>
                <Text>Phone: 081-xxx-xxx</Text>

            </View>
<Text style={myStyle.title1}>ภาพกิจกรรม</Text>


            {/* ใส่ภาพจากลิงก์ */}
            
            {/* จัดแนวนอน */}
            <View style={{ flexDirection: "row" }}>
                {/* fn + e เปิดอิโมจิ */}
                <Image
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5NrzB7iGQ4dMp3gBV5bzhrcWW3vprnGSI7HrXCZaBwZbcYfhjK6kuwEM&s=10"  }}
                style={{
                    width: 150, //กวา้ง
                    height: 150, //สูง
                   borderRadius: 30, //ความโค้งของมุม
                }}
            />
            <Image
                source={require('@/assets/images/cat.jpeg')}
                style={{
                    width: 150, //กวา้ง
                    height: 150, //สูง
                   borderRadius: 30, //ความโค้งของมุม
                }}
            />
            <Image
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5NrzB7iGQ4dMp3gBV5bzhrcWW3vprnGSI7HrXCZaBwZbcYfhjK6kuwEM&s=10"  }}
                style={{
                    width: 150, //กวา้ง
                    height: 150, //สูง
                   borderRadius: 30, //ความโค้งของมุม
                }}
            />
            </View>
        </View>
    )
}

const myStyle = StyleSheet.create({
    // สไตล์ของกล่อง
    container: {
        // css บนเว็บ -> background-Color
        backgroundColor: "#0cddd2", // สีพื้นหลัง
        flex: 1,// ขยาย
        paddingTop: 80, // เพิ่มช่องว่างด้านบนในกล่อง
        alignItems: "center"
    },
    container1: {
        // css บนเว็บ -> background-Color
        backgroundColor: "grey", // สีพื้นหลัง
         width: 400, //กวา้ง
        height: 100, //สูง
         borderRadius: 30, //ความโค้งของมุม
        paddingTop: 20, // เพิ่มช่องว่างด้านบนในกล่อง
        paddingLeft: 20,

    },
    title: {
        color: "blue",// สีอักษร
        fontSize: 26, //ขนาดอักษร
        fontWeight: 700, // ความหนาอักษร
        textAlign: "center",// จัดแนวการวาง
    },
    title1: {
        color: "green",// สีอักษร
        fontSize: 26, //ขนาดอักษร
        fontWeight: 700, // ความหนาอักษร
        textAlign: "center",// จัดแนวการวาง
    }
})