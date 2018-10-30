import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("countries",{schema:"mtr"})
export class Countries {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    Id:number;
        

    @Column("text",{ 
        nullable:false,
        name:"country_name"
        })
    CountryName:string;
        
}
