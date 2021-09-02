import Image from 'next/image';

// import package images
import MaduraiPackage from '../../assets/images/madurai-package.png';
import OotyPackage from '../../assets/images/ooty-package.png';
import ThanjavurPackage from '../../assets/images/thanjavur-package.png';
import MudumalaiNationalParkPackage from '../../assets/images/mudumalai-national-park-package.png';

// import slider images
import SliderImg0 from '../../assets/images/slider-image-0.png';

const BoatHouse = () => {
    return (
        <>
            <section className="my-6 py-5">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="boat-house-wrapper">
                                <div className="standard-cursive-text">Introducing</div>
                                <div className="boat-house-heading-text mb-4">Boat House</div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="package-carousel">
                                <Image src={SliderImg0} alt="Image of a tourist place in coimbatore" />
                                <div className="package-slider-wrap">
                                    <div className="package-slider-text">Kodaikanal</div>
                                    <div className="package-slider-detail">Starting Room From ₹ 5200</div>
                                </div>
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 h-200">
                                    <div className="packages-images">
                                        <Image src={MaduraiPackage} alt="Hotel image in madurai" />
                                        <div className="package-wrap">
                                            <div className="package-name-text">OOTY</div>
                                            <div className="package-detail-text">Starting Room From ₹ 5200</div>
                                        </div>
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 h-200">
                                    <div className="packages-images">
                                        <Image src={OotyPackage} alt="Ooty a queen of hill station" />
                                        <div className="package-wrap">
                                            <div className="package-name-text">YERCAUD</div>
                                            <div className="package-detail-text">Moments Into Memories</div>
                                        </div>
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-6 h-200">
                                    <div className="packages-images">
                                        <Image src={ThanjavurPackage} alt="A aesthetic place in thanjavur" />
                                        <div className="package-wrap">
                                            <div className="package-name-text">PICHAWARAM</div>
                                            <div className="package-detail-text">Let’s Be Aesthetic</div>
                                        </div>
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 h-200">
                                    <div className="packages-images">
                                        <Image src={MudumalaiNationalParkPackage} alt="Mudumalai national park image" />
                                        <div className="package-wrap">
                                            <div className="package-name-text">MUDUMALAI<br /> NATIONAL PARK</div>
                                            <div className="package-detail-text">Get In Touch With The Nature</div>
                                        </div>
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BoatHouse;