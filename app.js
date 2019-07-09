class Apex {
    constructor(){
        this.trn_api_key = 'fb47dc2b-155f-4f8c-b7bf-db83fae4b681';
    }

    async getUser() {
        const profileResponse = await fetch(`https://public-api.tracker.gg/v2/apex/standard/search?platform=psn&query=BBaccz&TRN-Api-Key=fb47dc2b-155f-4f8c-b7bf-db83fae4b681`);
        const profile = await profileResponse.json();
        return profile;
    }
}
