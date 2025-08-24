# CloudLaunch – AltSchool Cloud Assignment

This repository documents the setup and configuration of an AWS environment for hosting a static website with secure access.  

## Task 1: Static Website Hosting with S3
- Created two S3 buckets:
  - `cloudlaunch1-site-bucket` → configured for static website hosting.
  - `cloudlaunch1-log-bucket` → used to store access logs.
- Uploaded an `index.html` file to the site bucket.
- Enabled **Static Website Hosting** on the site bucket.
- Configured permissions with a bucket policy to allow public read access.
- Linked logging so that all access logs from the site bucket are stored in the log bucket.

 **S3 Website URL:**  
http://cloudlaunch1-site-bucket.s3-website-us-east-1.amazonaws.com  



##  Task 2: IAM User, Policy, and VPC
- Created an IAM user: **CloudLaunchUser**
- Attached a custom policy (`CloudLaunchUserPolicy2.json`) that provides:
  - Full access to **S3**  
  - Full access to **VPC**  
  - Ability to list CloudFront distributions  

📂 The full policy file is included in [`policy/CloudLaunchUserPolicy2.json`](policy/CloudLaunchUserPolicy2.json).  

👤 **Account Info:**  
- AWS Account ID (alias): **107346957853**  
- Console sign-in URL: https://107346957853.signin.aws.amazon.com/console  
- Credentials for IAM user: *submitted privately as instructed*  
- User is forced to change password on first login.  

---

##  CloudFront Distribution
- Created a CloudFront distribution pointing to the S3 site bucket.
- Configured default behavior with **index.html** as root object.
- This improves performance and security.  

  

## CloudFront URL 
 https://diccb94vbjolp.cloudfront.net/



