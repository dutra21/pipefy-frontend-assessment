import { ICard } from "./card.interface";

export interface ICards {
    edges: [ICard];
    pageInfo: {
      endCursor: string;
      hasNextPage: Boolean;
      hasPreviousPage: Boolean;
      startCursor: string;
    };
}

export interface ICardsResult {
    cards: ICards;
}