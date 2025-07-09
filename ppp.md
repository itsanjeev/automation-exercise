You are an expert infrastructure analyst tasked with evaluating Azure GPU-enabled virtual machines (VMs) for running UI tests that involve rendering 3D models in Autodesk Moldflow.

### Context:
- The application under test, Autodesk Moldflow, requires GPU-based rendering and has the following **minimum system requirements**:
    - OpenGL 3.2 or higher
    - Hardware acceleration (GPU-supported)
    - Graphics card with 512 MB DRAM or higher
    - 1280x1024 or higher resolution
    - 24-bit color depth
    - Latest manufacturer-supported GPU drivers
    - Autodesk does **not guarantee** compatibility with any specific GPU but expects hardware acceleration support.

- The goal is to **automate smoke UI tests** using Azure VMs that:
    - Load and render `.STY` files in Moldflow
    - Execute under CI pipelines
    - Offer **cost-effective** GPU resources while **meeting the minimum rendering specifications**

### Your Task:
Using only official Microsoft Azure and Autodesk documentation (no third-party blogs, assumptions, or hallucinated specs), do the following:

1. **List Azure GPU-enabled VM series** (e.g., NV-series, NC-series, ND-series, NVadsA10 v5, etc.) that:
   - Support OpenGL 3.2+ via GPU passthrough or driver-based emulation
   - Are compatible with Windows OS and Autodesk applications
   - Have minimum 512 MB GPU memory or more
   - Can run at minimum 1280x1024 resolution
   - Support 3D rendering acceleration via hardware

2. **Compare and evaluate the VM families** in a detailed table:
   - VM Size
   - GPU Type (e.g., NVIDIA T4, A10, K80, M60)
   - VRAM (GPU memory)
   - vCPU, RAM
   - GPU Driver Support for OpenGL 3.2+
   - Price per hour (in USD and INR if available)
   - Availability in East/West India or nearby regions
   - Boot time / cold start latency (if notable)
   - Any known limitations for interactive UI-based GPU rendering

3. Based on cost vs. capability:
   - Identify the **most cost-effective VM SKU** that satisfies all Moldflow requirements for automated UI testing (not for full simulation workloads)
   - Justify with reasoning: explain trade-offs in pricing vs. GPU spec

4. Recommend a **VM image strategy**:
   - Suggest base Windows image and driver setup to preload on the VM (e.g., NVIDIA drivers, Autodesk prerequisites)
   - Evaluate persistent disk/image reuse to save cold boot time
   - Suggest snapshot/scale-set setup for optimized reuse in CI pipelines

### Constraints:
- Use only **official Microsoft Azure pricing and documentation**
- Refer to **Autodesk’s official compatibility or GPU FAQ** for Moldflow
- Do **not** hallucinate or suggest unsupported GPU VMs
- Avoid recommending overly expensive GPU VMs if cheaper alternatives work
- Be objective, tabular where helpful, concise but detailed

### Output:
Return the response as a detailed technical assessment, including tables, comparisons, and a one-paragraph recommendation summary for CI/CD usage.

