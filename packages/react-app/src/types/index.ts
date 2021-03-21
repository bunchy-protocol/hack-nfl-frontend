export interface NFT {
  id: string;
  img: string;
}

export class Hashmask implements NFT {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  public get img() {
    return `https://hashmasksstore.blob.core.windows.net/hashmasksthumbs/${this.id}.png`;
  }
}
