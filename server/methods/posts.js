import {Posts, Comments} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'posts.create'(type,amount,zone,address,img,title,content) {
      check(type, String);
      check(amount, Number);
      check(zone, String);
      check(address, String);
      check(img, String);
      check(title, String);
      check(content, String);
      // Demo the latency compensations (Delete this in production)
      // Meteor._sleepForMs(500);

      // XXX: Do some user authorization
      const createdAt = new Date();
      const post = {type,amount,zone,address,img,title,content, createdAt};
      Posts.insert(post);
    }
  });

  Meteor.methods({
    'posts.createComment'(_id, postId, text) {
      check(_id, String);
      check(postId, String);
      check(text, String);

      // Show the latency compensations
      Meteor._sleepForMs(500);

      // XXX: Do some user authorization
      const createdAt = new Date();
      const author = 'The User';
      const comment = {_id, postId, author, text, createdAt};
      Comments.insert(comment);
    }
  });
}
