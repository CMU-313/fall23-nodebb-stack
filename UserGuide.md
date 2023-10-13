# User Guide for New Features

## Search Feature
**How to Use** : Navigate to the announcements page. Type something into the search bar at the top and matching announcement titles will be displayed. Note: it is case-sensitive.

**How to User Test** : You can either manually test by typing in search queries and seeing if the results match, or running the search test suites using ``` npx mocha test/topicLists.js ```.
The automated tests are on a separate branch called [search_topic_tests](https://github.com/CMU-313/fall23-nodebb-stack/tree/search_topic_tests) because the handleSearch function could not be exported properly. I went to OH and worked on it with the TAs but could
not resolve this issue so I didn't merge it to main. The tests check the following:

1. When given a query that doesn't match any topics, it returns no topics
2. When given a query that matches topic(s), it returns all topic(s) with matching titles
3. When given a query that doesn't case sensitive match a topic title, it returns no topics
4. When given a query that matches multiple topics, it returns all of the different topics and not one of the topics multiple times

These tests are sufficient because they cover all scenarios and edge cases of the search feature. They test for the case of zero, one and multiple expected search results and that they case sensitive match the search query.

## Endorsement Feature

**Purpose** : The main purpose of the endorsement feature is to enable users to endorse certain posts. Posts that are endorsed will have a corresponding UI feature that will show that it is endorsed and the number of endorsements for the post will be stored in the database.

**Challenges in testing** : To implement the endorsement feature, we have created a file called endorsements.ts under the posts directory. That file contains the logic to maintain the posts. Unfortunately the current test cases for the endorsement feature do not work as we are unable to figure a "no email sent" bug caused by the compiler when the compiler converts our typescript files to javascript. We have tried debugging the situation by converting the typescript file to vanilla javascript but to no avail. Additionally, the databse is unable to find a "hook" entry which further complicates the issue. We believe that this is due to the failure of the compiler when converting Typescript files to javascript files with regards to the module imports. The imported modules in ES6 syntax could possibly contain the wrong reference, leading to the error.

All test cases are located in the branch [endorsement-test](https://github.com/CMU-313/fall23-nodebb-stack/tree/endorsement-test)
