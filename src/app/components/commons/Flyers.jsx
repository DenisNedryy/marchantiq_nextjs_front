
import flyer_jf_1 from "../../../../public/assets/pictures/photos/flyer_jf_1.png";
//"/assets/pictures/photos/flyer_jf_1.png";
import flyer_jf_2 from "../../../../public/assets/pictures/photos/flyer_jf_2.png";
import Link from "next/link";
import Image from "next/image";

export function Flyers() {

    return (
        <div className="flyers">
            {/* <img src={flyer_2} />
            <img src={flyer_2} /> */}
            <div className="flyers__container">
                <Link href="/contact">
                    <div className="flyer">
                        <Image src={flyer_jf_2} alt="flyer envoyez moi vos photos"/>
                        <div className="para_1">
                            <p style={{ fontFamily: "titres", fontWeight: "600" }}>Achat Vente Estimation</p>
                            <p className="flyer__para_1_2">Envoyez moi des <span className="red">photos</span></p>
                            <p className="flyer__para_1_3">de vos objets</p>
                        </div>
                    </div>
                </Link>
             
                <div className="flyer">
                    <Image src={flyer_jf_1} alt="flyer presentation des catégories" />
                    <div className="para_2">
                        <p style={{ fontFamily: "titres", fontWeight: "600" }}>Mobilier - Tableaux - Souvenirs Historiques</p>
                        <p style={{ fontFamily: "titres", fontWeight: "600" }}>Porcelaine - Objets - Militaires</p>
                        <p style={{ fontFamily: "titres", fontWeight: "600" }}>Livres Anciens - Vintage</p>
                    </div>
                </div>
            
            </div>


            {/* <img src={flyer_3} />
            <img src={flyer_4} />
            <img src={flyer_5} /> */}

        </div>
    );
}

