import { Index,Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity } from "typeorm";
import { Seasons } from "./Seasons";

@Entity("meetings", {schema:"mtr"})
@Index("season_id")
export class Meetings extends BaseEntity {

    @PrimaryGeneratedColumn({ 
        name:"id"
    })
    id: number;
        
    @Column("int",{ 
        nullable: false,
        name: "number"
    })
    number: number;
    
    @Column("datetime", { 
        nullable: false,
        name: "startsOn"
    })
    startsOn: string;
    
    @ManyToOne(type=> Seasons, season => season.meetings, { nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name:'season_id' })
    season : Seasons | null;
}
