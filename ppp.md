You are an expert infrastructure and systems analyst helping evaluate Azure GPU-enabled virtual machines (VMs) for running UI tests in Autodesk Moldflow.

### Objective:
We need to run automated UI smoke tests for Autodesk Moldflow using Azure GPU VMs that can render 3D `.STY` design files. These tests run in CI pipelines, and the environment must meet **Autodesk Moldflow's minimum system requirements**:

### Moldflow Minimum GPU Requirements:
- OpenGL version: **3.2 or higher**
- Graphics card: **512 MB DRAM or more**
- Support for **hardware acceleration**
- **24-bit color setting**
- Screen resolution: **1280x1024 or higher**
- Autodesk **does not guarantee** support for any specific GPU; latest drivers required
- Must be compatible with **Windows OS**

---

### Workflow Instructions (Do Not Skip Any Step):

#### ✅ Task 1: Identify Suitable Azure GPU VMs
- List **only official Microsoft Azure GPU-enabled VM families** (e.g., NV, NVadsA10 v5, NC, ND).
- Only include SKUs that:
  - Support **OpenGL 3.2+**
  - Provide **hardware acceleration**
  - Have **512 MB GPU memory or more**
  - Support **Windows OS**
  - Can render UI in interactive sessions or automated UI tests

✅ **Checkpoint:** Only continue if **at least one VM series** meets all Moldflow requirements.

---

#### ✅ Task 2: Build a Comparison Table
- For each shortlisted VM SKU:
  - VM Size/Name
  - GPU Model (e.g., NVIDIA T4, A10, M60, etc.)
  - GPU VRAM size
  - vCPU and RAM
  - Price per hour (in both USD and INR if available)
  - Availability zones (India preferred)
  - OpenGL 3.2+ driver support
  - Any known limitations for Moldflow or 3D UI testing

✅ **Checkpoint:** Validate facts from **official Microsoft Azure documentation** and **Autodesk GPU requirements**. Avoid assumptions or third-party sources.

---

#### ✅ Task 3: Cost vs Performance Evaluation
- Analyze the table and recommend:
  - The **most cost-effective VM** that meets Moldflow’s GPU requirements
  - Justify based on price-to-performance ratio
  - Mention trade-offs (e.g., cheaper VMs with older GPUs vs newer ones)

✅ **Checkpoint:** Confirm the recommendation matches Autodesk’s GPU requirement and is suitable for automated UI smoke test rendering.
