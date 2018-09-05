import axios from 'axios';
//http://localhost:3000/api/meetups

axios.defaults.baseURL = 'http://192.168.1.7:3000/api';

const fakeGroupId = '5b19b9a81f680f2ca85c625a';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
    //this.path = `/meetups`;
  }

  async fetchGroupMeetups() {
    const { data } = await axios.get(this.path);
    return data.meetups;
  }
}

export {
  MeetupApi
};