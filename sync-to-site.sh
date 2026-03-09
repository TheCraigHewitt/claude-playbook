#!/bin/bash
# sync-to-site.sh — Sync standalone repo files into craighewitt-com
# Run from claude-playbook repo root

set -e

SITE="${1:-../craighewitt-com}"

if [ ! -d "$SITE/app" ]; then
  echo "Error: $SITE doesn't look like the craighewitt-com repo"
  exit 1
fi

echo "Syncing to $SITE..."

rsync -av --delete app/ "$SITE/app/claude-playbook/"
rsync -av --delete components/ "$SITE/components/claude-playbook/"
rsync -av --delete content/ "$SITE/content/claude-playbook/"
rsync -av --delete lib/ "$SITE/lib/playbook/"
rsync -av --delete hooks/ "$SITE/hooks/"

echo ""
echo "Sync complete. Run 'npm run build' in $SITE to verify."
