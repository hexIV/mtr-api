import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("horsesforsale",{schema:"mtr"})
export class Horsesforsale {

    @PrimaryGeneratedColumn({ 
        name:"horseforsale_id"
        })
    HorseforsaleId:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"horse_name"
        })
    HorseName:string;
        

    @Column("int",{ 
        nullable:false,
        name:"horse_age"
        })
    HorseAge:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:40,
        name:"horse_country"
        })
    HorseCountry:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"horse_winnings"
        })
    HorseWinnings:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:200,
        name:"horse_record"
        })
    HorseRecord:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"horse_sire"
        })
    HorseSire:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"horse_mare"
        })
    HorseMare:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:15,
        name:"horse_sex"
        })
    HorseSex:string;
        

    @Column("int",{ 
        nullable:false,
        name:"horse_points"
        })
    HorsePoints:number;
        

    @Column("int",{ 
        nullable:false,
        default:"0",
        name:"horse_price"
        })
    HorsePrice:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:40,
        name:"contact_mobile"
        })
    ContactMobile:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:40,
        name:"contact_telephone"
        })
    ContactTelephone:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:40,
        name:"contact_email"
        })
    ContactEmail:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:40,
        name:"contact_languages"
        })
    ContactLanguages:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"advert_finish"
        })
    AdvertFinish:string;
        

    @Column("text",{ 
        nullable:false,
        name:"freetext"
        })
    Freetext:string;
        
}
