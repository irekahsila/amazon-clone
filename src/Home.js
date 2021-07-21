import React from 'react'
import "./Home.css"

// Components
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className='home__image' />
                <div className="home__row">
                    <Product 
                    id={12321341}
                    title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses' 
                    price={19.99} 
                    rating={5}
                    image="https://cdn2.penguin.com.au/covers/original/9780670921607.jpg" />
                    <Product 
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5L Stainless Steel Bowl, Removable Splash Guard, 1000 W, Editions Black"
                    price={239}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                    id={3211235}
                    title="Naturehike Cloud up 1 Person Backpacking Tent Lightweight Camping Hiking Dome Tent for 1 Man"
                    price={118.14}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51xzQaKhsiL._AC_SL1200_.jpg"/>
                    <Product 
                    id={3211235}
                    title="Crucial MX500 1TB SATA 2.5-inch 7mm (with 9.5mm Adapter) Internal SSD, 1000, CT1000MX500SSD1, Blue/Gray"
                    price={135.87}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81rg-38AdJL._AC_SL1500_.jpg"/>
                    <Product 
                    id={3211235}
                    title="Nintendo Switch Console [Neon Blue/Red]"
                    price={427}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51vKlrdRKYL._AC_SL1200_.jpg"/>
                </div>
                <div className="home__row">
                    <Product 
                    id={3211235}
                    title="Samsung 5K Gaming Monitor,LC49RG90"
                    price={1798.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71tZW1aa%2BPL._AC_SL1500_.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Home
