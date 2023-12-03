terraform {
  backend "s3" {
    bucket         = "3.6-terraform-bucket"
    key            = "terraform.tfstate"
    profile        = "terraform"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "terraform-lock-table"
  }
}