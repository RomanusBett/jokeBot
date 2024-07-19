import Button from "./Button";
import styles from './home.module.css'
import AnimatedGIF from "./AnimatedGIF";
import Header from "./Header";

const Home = ()=>{
    return (
        <div className={`${styles.app} ${styles.home}`}>
            <Header />
            <AnimatedGIF link="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3pja28waHZoaDN2MnJzNzBwamdnMnUzanduejJndjA0aGZveGJ6YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUA7b30EbtkaMHvRgk/giphy.gif"/>
            <Button /> 
        </div>
    )
}

export default Home;