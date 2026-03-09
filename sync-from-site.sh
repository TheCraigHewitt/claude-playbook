#!/bin/bash
# sync-from-site.sh — Pull latest playbook files from craighewitt-com into this repo
# Run from claude-playbook repo root

set -e

SITE="${1:-../craighewitt-com}"

if [ ! -d "$SITE/app/claude-playbook" ]; then
  echo "Error: $SITE doesn't look like the craighewitt-com repo"
  exit 1
fi

echo "Pulling from $SITE..."

rsync -av --delete "$SITE/app/claude-playbook/" app/
rsync -av --delete "$SITE/components/claude-playbook/" components/
rsync -av --delete "$SITE/content/claude-playbook/" content/
rsync -av --delete "$SITE/lib/playbook/" lib/
rsync -av --delete "$SITE/hooks/" hooks/

echo ""
echo "Pull complete. Review changes with 'git diff'."
