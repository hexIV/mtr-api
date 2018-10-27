import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("kf_horsesimported",{schema:"mtr"})
export class kfHorsesimported {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:400,
        name:"name"
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:400,
        name:"filename"
        })
    filename:string;
        
}
