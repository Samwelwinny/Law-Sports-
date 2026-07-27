# Deployment Guide

## Prerequisites
- Ubuntu 20.04+ server with 4GB+ RAM
- Docker Engine 20.10+ and Docker Compose 2.0+
- Domain name with DNS configured
- SSL certificates (Let's Encrypt recommended)

## Environment Setup
1. Clone repository: `git clone https://github.com/yourusername/prolegis.git`
2. Configure environment: `cp .env.example .env`
3. Edit `.env` with production values:
   ```bash
   NODE_ENV=production
   DB_PASSWORD=strong_password_here
   JWT_SECRET=generate_with_openssl_rand_hex_64
   ENCRYPTION_KEY=generate_with_openssl_rand_hex_32
```

Database Initialization

```bash
# Start only database services
docker-compose up -d postgres redis

# Run migrations
docker-compose exec backend npm run migrate

# Create admin user
docker-compose exec backend node scripts/create-admin.js
```

Full Deployment

```bash
# Build and start all services
docker-compose up -d --build

# Verify services
docker-compose ps
curl https://yourdomain.com/api/health
```

Backup & Recovery

```bash
# Manual backup
./scripts/backup.sh

# Restore from backup
docker-compose exec postgres psql -U prolegis_admin prolegis < backup.sql
```

Monitoring

· API Health: https://yourdomain.com/api/health
· Container Logs: docker-compose logs -f backend
· Database Metrics: Configured in Prometheus