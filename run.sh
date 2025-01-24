#!/usr/bin/env bash

set -e

cd "$(dirname "$0")"

cd web && pnpm run build && cd -

go run main.go
