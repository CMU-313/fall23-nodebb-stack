# Endorsements

## Using the feature

This endorsement feature is not fully implemented yet, but would ideally be used following these steps:

1. Have an admin add verified instructors into the "Global 
Moderators" group
2. Instructors that are Global Moderators should now be able to 
see an option to endorse the post in the lower right tool bar 
found in every post.
! [Example of a post in NodeBB with the endorse option showing 
with the other options in the toolbar like upvoting the post.] 
(/assets/toolbar.png)
3. Clicking on the endorse button will cause the post the 
become endorsed - a green text will help indicate which posts 
have been endorsed.
! [Picture of an endorsed post, distinguished from other posts 
by the green text at the bottom stating that the post has been 
endorsed by an instructor.] (/assets/endorsed_post.png)
4. The endorsed posts will show up first when posts are searched,
   before all of the unendorsed ones.

## User testing the feature

User testing the feature would include two main actions:

1. Creating a student and instructor account, and ensuring that 
only the instructor can see the option to endorse a post.
2. Endorsing the post as an instructor causes the indicator to 
show up.
3. Endorsed posts are shown first.

## Testing

Automated tests were created in order to replicate user testing.

### Privileges

Tests for the **first feature** can be found [here] (/test/
topics.js:2835), where the **privileges** of different kinds of 
users were tested. Users of the all the types (admin, global 
moderator, and regular user) were created and isolated for 
testing. We ensured that the function `.canEndorse` was 
functioning properly and returning the correct privilege level 
for each type of user.

The tests were robust, as we covered all possible return 
options (either true or false) and tested each user type. It 
was not necessary to test the guest user type, as they would 
not be able to view any of the post tool bar regardless.

### Endorsing

Tests for the **second feature** can be found [here] (/test/
posts.js:1232), where the **action of endorsing** was checked. 
As with the previous tests, we covered the different possible 
return routes to ensure that a post was actually being endorsed 
at the right times, by the right people.

There were two different tests written, one which converted a 
non-endorsed post to an endorsed post, and one where the post 
should stay non-endorsed given the wrong type of user. Both of 
these tests did so by grabbing the field parameters 
`isEndorsed` and `endorsements` of the post before the 
modification, and comparing it the updated fields after the 
function `.endorsePost()` was called.

### Endorsement Prioritization

The code for the endorsed post prioritization cannot be fully 
tested as the backend isn't fully connected. Additionally this 
feature will break with large numbers of instructors. Therefore,
no unit tests could be written. This is a shortocming of the project.

## Why the tests were sufficient

The tests covered both breadth and depth. There were two things 
that were able to be user tested, and we covered that in our 
automated testing. The tests themselves also covered all return 
routes. We were able to test what we needed in an efficient 
manner, which makes me think that our tests are sufficient for 
covering the changes made.
