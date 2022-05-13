# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.13] - 2022-05-13
### Fixed
- onError callback was returning type `Promise<never>` changed to `any`

## [0.0.12] - 2022-05-13
### Added
- Manual control over `onError` interceptor when initializing.
- Changelog implemented using [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.0.11] - 2022-05-11
### Added
- First stable version.
- Fully typed api for Partnerstack's 
  - `Deals` 
  - `Actions` 
  - `Customers` 
  - `Form Templates`
  - `Groups`
  - `Leads`
  - `Partnerships`
  - `Rewards`
  - `Transactions`