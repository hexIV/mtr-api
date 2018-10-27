import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("antoine_horsesforsale_images",{schema:"mtr"})
export class antoineHorsesforsaleImages {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"horse_id"
        })
    horseId:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:400,
        name:"filename"
        })
    filename:string;
        
}
