import mongoose, {Schema} from 'mongoose';

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Name must be 5 charecters long']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Description must be 10 charecters long']
    },
    category: {
        type: String
    },
    meetups: [{
        type: Schema.Types.ObjectId,
        ref: 'Meetup'
    }]
}, {timestamps: true});

/**
 * Create a meetup and add it to the meetups array in the group.
 */

GroupSchema.statics.addMeetup = async function (id, args) {
    const Meetup = mongoose.model('Meetup');
    // We add the group id to the meetup group element
    // Finally this is the author of the meetup
    const meetup = await new Meetup({ ...args, group: id});
    // We found the group with the id provide in the url
    // And we push the meetup id in the meetups element
    const group = await this.findByIdAndUpdate(id, { $push: { meetups: meetup.id } });

    //var meetup = await meetup.save();

    //console.log(meetup);
    return {
      meetup: await meetup.save(),
      group
    };

    /*group.meetups.push(meetup);

    var promise1 = await meetup.save();

    console.log(promise1);

    var promise2 = await group.save();

    console.log(promise2);*/

    //var promise1 = await meetup.save();

    //console.log(promise1);

    //var promise2 = await group.save();

    //console.log(promise2);

    /*Promise.all([meetup.save(), group.save()]).then(function(result){
      console.log(result);
    });*/

    //console.log(result);

    /*var promise1 = Promise.resolve(3);
    var promise2 = 42;
    var promise3 = new Promise(function(resolve, reject) {
      setTimeout(resolve, 100, 'foo');
    });

    Promise.all([promise1, promise2, promise3]).then(function(values) {
      console.log(values);
    });*/

    //console.log(result);

    //return result;

};

export default mongoose.model('Group', GroupSchema);
