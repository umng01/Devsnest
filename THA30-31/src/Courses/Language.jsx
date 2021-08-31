import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Courses.css";
import Row from './Row'
import Card from './Card';

const Language = () => {
    const cards = [
        {
            id: Math.random()*10,
            src:"https://coursemarks.com/wp-content/uploads/2020/11/1581488_e3e1_2.jpg",
            title: "Complete C# Masterclass",
            desc: "Learn C# Programming - WPF, Databases, Linq, Collections, Game Development with Unity. More than just the C# basics!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/complete-csharp-masterclass/"
            
        },
        {
            id: Math.random()*10,
            src:"https://www.edx.org/static/6a7fb061164e43e112067bfaaceefaa9/learn_python.jpg",
            title: "Learn to Code with Python",
            desc: " The complete Python bootcamp for 2021. Learn Python 3 from beginner to expert. Build complete Python applications.",
            price: "₹499",
            cutprice:"₹9,000",
            rating: "★★★★☆",
            view: "https://www.udemy.com/course/learn-to-code-with-python/"
            
        },
        {
            id: Math.random()*10,
            src:"https://www.takethiscourse.net/wp-content/uploads/2020/02/Complete-Python-Masterclass.jpg",
            title: "Learn Complete Python",
            desc: "Direct Class Room Videos To give Left & Right Anywhere about Python 3 Concepts In Detail From Beginner to Expert Level",
            price: "₹786",
            cutprice:"₹1,999",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/learn-complete-python-tutorial-in-simple-way/"
            
        },
        {
            id: Math.random()*10,
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTssGrDdAVm4jfdX459s-xuT_XOLm2k7J3ybg&usqp=CAU",
            title: "Asynchronous JavaScript",
            desc: "Become an expert in Asynchronous JavaScript, Callbacks, Promises, Async/Await.",
            price: "₹450",
            cutprice:"₹7,200",
            rating: "★★★☆☆",
            view: "https://www.udemy.com/course/how-to-make-a-freaking-android-app/"
            
        },
        {
            id: Math.random()*10,
            src:"https://helpdeskgeek.com/wp-content/pictures/2020/01/C.png",
            title: "Learn and Understand C++",
            desc: " Take this course to learn C++ which you can use for ethical hacking, game development, & software you use daily!",
            price: "₹799",
            cutprice:"₹3,999",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/react-js-mastering-redux/https://www.udemy.com/course/learn-c-plus-plus-from-beginner-to-advanced/"
            
        },
        {
            id: Math.random()*10,
            src:"https://i.ytimg.com/vi/0zuolvgpAaY/maxresdefault.jpg",
            title: "Advanced C Programming",
            desc: "Become a True Master of C Programming Language - Confidently Apply for Real Time or Embedded C Jobs!",
            price: "₹459",
            cutprice:"₹5,600",
            rating: "★★★★☆",
            view: "https://www.udemy.com/course/advanced-c-programming-course/"
            
        },
        {
            id: Math.random()*10,
            src:"https://summarynetworks.com/wp-content/uploads/2021/07/1627063788_maxresdefault.jpg",
            title: "C Programming For All",
            desc: "Learn C programming for beginners, Learn programming fundamentals, Be able to create C applications",
            price: "500",
            cutprice:"₹9,670",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/learn-c-programming-for-complete-beginners/"
            
        },
        {
            id: Math.random()*10,
            src:"https://i.ytimg.com/vi/SqrbIlUwR0U/maxresdefault.jpg",
            title: "Go Syntax Explained (2)",
            desc: " Arrays and Slices - study, review, practice: a learning method for those needing to revisit periodically or drill Golang",
            price: "₹899",
            cutprice:"₹9,999",
            rating: "★★★★☆",
            view: "https://www.udemy.com/course/golang-arrays-slices-tutorial/"
            
        },
        {
            id: Math.random()*10,
            src:"https://coursemarks.com/wp-content/uploads/2020/11/1901724_6657_18.jpg",
            title: "Learning Path: Master...",
            desc: " Learn how to use this incredible language to build web-scale, real-time systems and applications on your own",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★☆☆",
            view: "https://www.udemy.com/course/learning-path-master-googles-go/"
            
        },
        {
            id: Math.random()*10,
            src:"https://dl3.tut4dev.ir/files/2781/ProBanner/banner.png",
            title: "Java for Absolute...",
            desc: " A course on Java for complete beginners to computer programming, for those who want concepts explained.",
            price: "₹880",
            cutprice:"₹9,510",
            rating: "★★★★★",
            view: "https://www.udemy.com/course/java-for-absolute-beginners/"
            
        },
        {
            id: Math.random()*10,
            src:"https://i.ytimg.com/vi/XaU8JKQW0Ao/maxresdefault.jpg",
            title: "Develop Minecraft Plugins",
            desc: "  High-quality tutorials providing you with the most sustainable practices available to make Minecraft plugins.",
            price: "₹400",
            cutprice:"₹6,400",
            rating: "★★★☆☆",
            view: "https://www.udemy.com/course/develop-minecraft-plugins-java-programming/"
            
        },
        {
            id: Math.random()*10,
            src:"https://thecodelearners.com/wp-content/uploads/2020/05/Javascript-Advance-Object-Operations.jpg",
            title: "Advanced Javascript",
            desc: "In only seven hours you will learn enough javascript to transform from a Junior JS Dev into a Senior JS Guru",
            price: "₹567",
            cutprice:"₹4,800",
            rating: "★★★★☆",
            view: "https://www.udemy.com/course/javascript-advanced/"
            
        },
        
        
        ];
    let arr = [];
    for(let i=0;i<=cards.length-4;i+=4) {
        arr.push(
            <Row>
                <Card key={cards[i].id} src={cards[i].src} title={cards[i].title} desc={cards[i].desc} price={cards[i].price} cutprice={cards[i].cutprice} rating={cards[i].rating} view = {cards[i].view} />
                <Card key={cards[i+1].id} src={cards[i+1].src} title={cards[i+1].title} desc={cards[i+1].desc} price={cards[i+1].price} cutprice={cards[i+1].cutprice} rating={cards[i+1].rating} view = {cards[i+1].view} />
                <Card key={cards[i+2].id} src={cards[i+2].src} title={cards[i+2].title} desc={cards[i+2].desc} price={cards[i+2].price} cutprice={cards[i+2].cutprice} rating={cards[i+2].rating} view = {cards[i+2].view} />
                <Card key={cards[i+3].id} src={cards[i+3].src} title={cards[i+3].title} desc={cards[i+3].desc} price={cards[i+3].price} cutprice={cards[i+3].cutprice} rating={cards[i+3].rating} view = {cards[i+3].view} />
            </Row>
        )
    }
    if(cards.length%4==1) {
        arr.push(
            <Row>
                <Card key={cards[cards.length-1].id} src={cards[cards.length-1].src} title={cards[cards.length-1].title} desc={cards[cards.length-1].desc} price={cards[cards.length-1].price} cutprice={cards[cards.length-1].cutprice} rating={cards[cards.length-1].rating} view = {cards[cards.length-1].view} />
            </Row>
        );
    } else if(cards.length%4==2) {
        arr.push(
            <Row>
                <Card key={cards[cards.length-2].id} src={cards[cards.length-2].src} title={cards[cards.length-2].title} desc={cards[cards.length-2].desc} price={cards[cards.length-2].price} cutprice={cards[cards.length-2].cutprice} rating={cards[cards.length-2].rating} view = {cards[cards.length-2].view} />
                <Card key={cards[cards.length-1].id} src={cards[cards.length-1].src} title={cards[cards.length-1].title} desc={cards[cards.length-1].desc} price={cards[cards.length-1].price} cutprice={cards[cards.length-1].cutprice} rating={cards[cards.length-1].rating} view = {cards[cards.length-1].view} />
            </Row>
        );
    } else if(cards.length%4==3) {
        arr.push(
            <Row>
                <Card key={cards[cards.length-3].id} src={cards[cards.length-3].src} title={cards[cards.length-3].title} desc={cards[cards.length-3].desc} price={cards[cards.length-3].price} cutprice={cards[cards.length-3].cutprice} rating={cards[cards.length-3].rating} view = {cards[cards.length-3].view} />
                <Card key={cards[cards.length-2].id} src={cards[cards.length-2].src} title={cards[cards.length-2].title} desc={cards[cards.length-2].desc} price={cards[cards.length-2].price} cutprice={cards[cards.length-2].cutprice} rating={cards[cards.length-2].rating} view = {cards[cards.length-2].view} />
                <Card key={cards[cards.length-1].id} src={cards[cards.length-1].src} title={cards[cards.length-1].title} desc={cards[cards.length-1].desc} price={cards[cards.length-1].price} cutprice={cards[cards.length-1].cutprice} rating={cards[cards.length-1].rating} view = {cards[cards.length-1].view} />
            </Row>
        );
    }
  
  return (
      <div className="App">
          <h1 class="heading">
        <span>Programming Languages</span>
      </h1>
      <div id="cards_landscape_wrap-2">
        <div className="container">
          {arr}
        </div>
      </div>
    </div>
  );
};
export default Language;