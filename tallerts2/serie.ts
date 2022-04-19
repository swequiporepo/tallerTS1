export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    page: string;
    imageUrl: string;
    
    constructor(id: number, name: string, channel: string, seasons: number, description: string, page: string, imageUrl: string ) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.page = page;
      this.imageUrl = imageUrl;
    }
  }