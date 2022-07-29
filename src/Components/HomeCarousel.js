import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from "styled-components"

const ImageWrapper = styles.div`
    img{
        width: auto;
        height:350px
    }

`

const HomeCarousel = () => {
    return (
        <Carousel
        showThumbs={false}
        >
                <div>
                    <img className={'carouselImage'} src="https://media.istockphoto.com/photos/entrance-of-luxury-hotel-picture-id503016934?k=20&m=503016934&s=612x612&w=0&h=TNmGhvvonBjX3Ihi0COjUgGOr9z0_KN6tgE_qCJ6IyM=" />
                    <p className="legend">Hotel Exterior</p>
                </div>
                <div>
                    <img className={'carouselImage'} src="https://static.tildacdn.com/tild6635-6138-4735-b334-353034663766/002_design_project_a.jpg" />
                    <p className="legend">Lobby</p>
                </div>
                <div>
                    <img className={'carouselImage'} src="https://www.peerspace.com/resources/wp-content/uploads/Peerspace-hotel-meeting-room-1-1024x682.jpeg" />
                    <p className="legend">Mayor Hall</p>
                </div>
                <div>
                    <img className={'carouselImage'} src="https://www.lottehotel.com/content/dam/lotte-hotel/lotte/hanoi/convention/meetings/emeraldroom/190502-3-2000-mee-LTHA.jpg.thumb.768.768.jpg" />
                    <p className="legend">VP Hall</p>
                </div>
                <div>
                    <img className={'carouselImage'} src="https://images.squaremeal.co.uk/cloud/articles/event-party-venues/news/1604_iet-london-savoy-place_position-11_kelving-lecture-theatre.jpg" />
                    <p className="legend">President Hall</p>
                </div>
                <div>
                    <img className={'carouselImage'} src="https://th.bing.com/th/id/R.820b455342821b0c0576cb1fcfbca11d?rik=RQbQS0Y0CKHEbA&riu=http://blog.fluidmeet.com/wp-content/uploads/2015/10/blog2.jpg&ehk=yEanvijOtit06ugpAeG5YeHfPkha0C49scJiEquKvJ0=&risl=&pid=ImgRaw&r=0" />
                    <p className="legend">Bronze Conference Room</p>
                </div>
                <div>
                    <img className={'carouselImage'} src="https://th.bing.com/th/id/OIP.6-RT8EaRFHD-ixfp9x-rggHaFj?pid=ImgDet&rs=1" />
                    <p className="legend">Silver Conference Room</p>
                </div>
                <div>
                    <img className={'carouselImage'} src="https://th.bing.com/th/id/R.f6749b7785db8a7c4c0b81d009288580?rik=xMICrNIpfM3Cdg&pid=ImgRaw&r=0" />
                    <p className="legend">Gold Conference Room</p>
                </div>
                
            </Carousel>
    )
}
  
  export default HomeCarousel;
