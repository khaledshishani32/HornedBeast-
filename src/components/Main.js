import React from "react";





function Card(props){
    return(
        <div>
            <h3>{props.title}</h3>
            <img src={props.img} alt="image" />
            <p>{props.description}</p>
        </div>
    );
}

class Main extends React.Component{
    render(){
        // const titleMain1="UniWhal"
        // const imgUrl1 ="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg";
        // const description1 ="A unicorn and a narwhal nuzzling their horns"

        // const titleMain2="Rhino Family"
        // const imgUrl2 ="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80";
        // const description2 ="Mother (or father) rhino with two babies"

        // const titleMain3="Unicorn Head"
        // const imgUrl3 ="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg";
        // const description3 ="Someone wearing a creepy unicorn head mask" ;
        return(
            <div>
                <main>

                 <Card title="UniWhal" img="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" description="A unicorn and a narwhal nuzzling their horns" />

                 <Card title="Rhino Family" img="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" description="Mother (or father) rhino with two babies" />

                 <Card title="Unicorn Head" img="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" description="Someone wearing a creepy unicorn head mask" />

                 {/* <h3>{titleMain1}</h3>
                 <img src={imgUrl1} alt="" />
                 <p>{description1}</p>

                 <h3>{titleMain2}</h3>
                 <img src={imgUrl2} alt="" />
                 <p>{description2}</p>

                 <h3>{titleMain3}</h3>
                 <img src={imgUrl3} alt="" />
                 <p>{description3   }</p> */}
                </main>
            </div>
        );
    }
}


export default Main;