import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("countries",{schema:"mtr"})
export class countries {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("text",{ 
        nullable:false,
        name:"country_name"
        })
    countryName:string;
        
}
