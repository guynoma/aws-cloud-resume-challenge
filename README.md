<h1><p align="center"> <strong> AWS-Cloud-Resume-Challenge </strong></p></h1>
The AWS Cloud Resume Challenge is a comprehensive hands-on project designed to showcase cloud computing skills by building a personal resume website using a range of AWS services. The challenge covers multiple facets of cloud architecture, serverless computing, continuous integration/continuous deployment (CI/CD), and cloud security. The primary objective is to demonstrate proficiency in deploying a static website on AWS while integrating additional cloud services to make the project dynamic, secure, and scalable.

# Key Elements of the Challenge:
  Static Website Hosting:
The challenge begins with building a static resume website using HTML, CSS, and JavaScript.
The static files are hosted in an Amazon S3 bucket.

# Global Content Delivery:
  AWS CloudFront is used to distribute the static content globally, leveraging Content Delivery Network (CDN) capabilities for faster load times.
Custom Domain & SSL/TLS:

AWS Route 53 is used to manage DNS and register a custom domain.
AWS Certificate Manager (ACM) is employed to create an SSL/TLS certificate, ensuring the site is served over HTTPS.

# Dynamic Visitor Counter:
The website includes a visitor counter that records each visit. This dynamic functionality is implemented using serverless architecture: AWS Lambda, API Gateway, and DynamoDB.
Lambda handles backend logic.
API Gateway exposes RESTful APIs.
DynamoDB stores the visitor count.

# Infrastructure as Code (IaC):
Terraform is used to automate the provisioning of all the required AWS resources, ensuring the infrastructure is repeatable and scalable.
  CI/CD Pipeline:

A continuous integration/continuous deployment pipeline is built using GitHub Actions.
Every code change triggers an automatic deployment to AWS.

# Cloud Security:
AWS Identity and Access Management (IAM) roles are created to ensure secure access to the AWS resources, adhering to the principle of least privilege.

# Deliverables:
  1) Static Website Files
  2) HTML, CSS, and JavaScript files for the personal resume site hosted in an S3 bucket.
  3) Amazon S3 Bucket: Configured for hosting static website files and integrated with CloudFront for global distribution.
  4) Custom Domain: Third Party Domain registration and DNS management through AWS Route 53, with HTTPS enabled using AWS Certificate Manager.
  5) Visitor Counter: A working visitor counter implemented using AWS Lambda, API Gateway, and DynamoDB.
  6) Infrastructure as Code (CloudFormation): A Terraform IaC method to provision all AWS resources.
  7) CI/CD Pipeline: GitHub Actions workflow for continuous deployment, ensuring any changes in the repository are reflected on the live site.
  8) Security Configuration: Proper IAM role configuration, bucket policies, and access control settings.





![cloud resume image](https://github.com/user-attachments/assets/9f04b54d-6a24-4eed-9999-4a982f7a2485)

# Main Outcomes:
1) Hands-On Experience with AWS Services: Gained intermediate-level proficiency with key AWS services, including S3, CloudFront, Route 53, Lambda, DynamoDB, and API Gateway.
2) End-to-End Cloud Infrastructure Deployment: Successfully built, deployed, and secured a cloud-hosted resume site, demonstrating an understanding of end-to-end cloud architecture.
3) Serverless Architecture Knowledge: Developed a serverless backend for dynamic functionalities (e.g., visitor counter) using AWS Lambda and DynamoDB.
4) CI/CD Automation: Implemented a robust CI/CD pipeline with GitHub Actions, showcasing knowledge in automated deployments.
5) Infrastructure as Code (IaC): Automated resource provisioning using Terraform, demonstrating scalability and repeatability of cloud infrastructure.
6) Cloud Security Practices: Applied AWS best practices for securing resources, including managing IAM roles and configuring bucket policies to ensure secure access to cloud resources.

# Summary of Achievements:
The challenge demonstrates strong cloud engineering skills, with the ability to design, deploy, and manage cloud resources using AWS.
Proficiency in AWS services, serverless computing, CI/CD pipeline setup, and cloud security are all crucial components for a modern cloud infrastructure.
