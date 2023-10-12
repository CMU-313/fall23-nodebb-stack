# User Guide for new features

## Endorsement Feature

**Purpose** : The main purpose of the endorsement feature is to enable users to endorse certain posts. Posts that are endorsed will have a corresponding UI feature that will show that it is endorsed and the number of endorsements for the post will be stored in the database.

**Challenges in testing** : To implement the endorsement feature, we have created a file called endorsements.ts under the posts directory. That file contains the logic to maintain the posts. Unfortunately the current test cases for the endorsement feature do not work as we are unable to figure a "no email sent" bug caused by the compiler when the compiler converts our typescript files to javascript. We have tried debugging the situation by converting the typescript file to vanilla javascript but to no avail. Additionally, the databse is unable to find a "hook" entry which further complicates the issue. We believe that this is due to the failure of the compiler when converting Typescript files to javascript files with regards to the module imports. The imported modules in ES6 syntax could possibly contain the wrong reference, leading to the error.

All test cases are located in the branch "endorsement-test"