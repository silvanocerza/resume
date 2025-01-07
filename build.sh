#!/bin/bash
set -e

# We need to install this to run Chromium when creating the PDF
dnf install -y nss

pnpm build
