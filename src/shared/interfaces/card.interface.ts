export interface ICardDetail {
    current_phase: {
      color: string;
      name: string;
    };
    id: number;
    title: string;
}
  
export interface ICard {
    cursor: string;
    node: ICardDetail;
}