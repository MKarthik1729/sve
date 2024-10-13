import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import './image.css'
function Image({img,title,desc}){
return(<div className={img }>
    <div className='left'>

    <h2>{title}</h2>
    <p>{desc}</p>
    </div>
</div>)
}

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
        <Image img="bo1" title="sri velu enterprises"/>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Image img="bo2" title="About" 
      desc="Sri Velu Enterprises is a privately held; AS9100 Rev D and ISO 9001 – 2015 certified manufacturer of precision machined parts and service provider in the field of Global supply chain management. The original vision of the founders, which continues to this day, is to deliver components and assemblies machined to the highest standards and services to be of outstanding value for our clients.s"
      />
      </Carousel.Item>
      <Carousel.Item  interval={500}>
      <Image img="bo3" title="Mission" 
      desc="Our mission is to revolutionize the manufacturing landscape by providing unparalleled CNC solutions that prioritize precision, efficiency, and innovation. We are dedicated to empowering our clients with cutting-edge technology, streamlining their production processes, and fostering a culture of continuous improvement. Through a commitment to reliability and excellence, we aim to be the go-to partner for manufacturers seeking to optimize their operations and stay ahead in a rapidly evolving industry. Our mission extends beyond delivering state-of-the-art CNC tools; it encompasses a vision of transforming businesses, fostering growth, and contributing to the advancement of industries worldwide through the seamless integration of our expertise and advanced technologies"
      />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;