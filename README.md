The objective is to build a self-hosted inventory management system that remedies key limitations of existing platforms like Homebox when applied to fast-paced household and workshop inventory.

### Core Differentiators

1. **Multi-Modal Scanning Pipeline:** Unified resolution of commercial UPC/EAN barcodes, custom SKU barcodes (Code 128/39), and internal asset/location QR codes.
    
2. **Dual-Input Mode Support:** Native camera barcode scanning on mobile alongside high-speed HID keyboard wedge support (2.4GHz / Bluetooth barcode scanners) on both Web and Android without requiring manual focus on input fields.
    
3. **Automated Metadata Enrichment:** Automatic lookup for food and retail products via Open Food Facts and UPCitemdb when a new UPC is encountered.
    
4. **First-Class Transaction Ledger:** Explicit tracking of increments, decrements, decants, and discards with webhook triggers for downstream integration (e.g., pushing depleted staples directly to Mealie).
    

## 2. System Architecture

```
                      ┌──────────────────────────────────────────────┐
                      │              Client Tier                     │
                      │                                              │
                      │   Flutter App (Android APK / Web App)        │
                      │   - Hardware Keyboard Event Bus (HID)        │
                      │   - Mobile Scanner / Camera (ML Kit)         │
                      │   - State Management (Riverpod / BLoC)       │
                      └──────────────────────┬───────────────────────┘
                                             │ HTTP / REST / WebSocket
                                             ▼
                      ┌──────────────────────────────────────────────┐
                      │              Backend Tier                    │
                      │                                              │
                      │   Node.js + Express / Fastify (TypeScript/JS)│
                      │   - Scanner Ingestion & Parser Service       │
                      │   - UPC Lookup Proxy (Open Food Facts / etc) │
                      │   - Inventory Transaction Engine             │
                      │   - Webhook Dispatcher (Mealie Sync)         │
                      └──────────────┬───────────────────────────────┘
                                     │
                        ┌────────────┴────────────┐
                        ▼                         ▼
             ┌─────────────────────┐   ┌──────────────────────┐
             │   Database Tier     │   │ External Services    │
             │ SQLite / PostgreSQL │   │ - Open Food Facts    │
             │                     │   │ - Mealie API         │
             └─────────────────────┘   └──────────────────────┘
```
