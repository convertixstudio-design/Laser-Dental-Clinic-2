import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

/**
 * 1. Bone Structure / Osseointegration Icon
 * Represents trabecular bone density and cellular implant integration
 */
export const BoneStructureIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
    {...props}
  >
    <path d="M7 6.5C5 6.5 3.5 5 3.5 3.5S5 1.5 6.5 2c1.5.5 2.5 2 2.5 3.5v13c0 1.5-1 3-2.5 3.5C5 22.5 3.5 20.5 3.5 19s1.5-3 3.5-3h10c2 0 3.5 1.5 3.5 3s-1.5 3.5-3 3c-1.5-.5-2.5-2-2.5-3.5V5.5c0-1.5 1-3 2.5-3.5 1.5-.5 3 1.5 3 3S19 6.5 17 6.5H7z" />
    <circle cx="12" cy="10" r="1" fill="currentColor" />
    <circle cx="12" cy="14" r="1" fill="currentColor" />
    <path d="M10 12h4" />
  </svg>
);

/**
 * 2. Dental Arch & Enamel Morphology Icon
 * Precise natural contour of an anatomical incisor/molar crown
 */
export const DentalArchIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
    {...props}
  >
    <path d="M4.5 9c0-3.5 3-6.5 7.5-6.5s7.5 3 7.5 6.5c0 5-2 10.5-5 13-1 .5-2-.5-2.5-2.5-.5-2-1.5-3-2-3s-1.5 1-2 3c-.5 2-1.5 3-2.5 2.5-3-2.5-5-8-5-13z" />
    <path d="M9 7.5c1-1 2-1 3-1s2 0 3 1" />
    <path d="M12 6.5v4" />
  </svg>
);

/**
 * 3. Jaw Alignment & Craniofacial Occlusion Icon
 * Balanced temporomandibular condyle alignment and sagittal trajectory
 */
export const JawAlignmentIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
    {...props}
  >
    <path d="M3 8c1.5-3 5-5 9-5s7.5 2 9 5" />
    <path d="M3 16c1.5 3 5 5 9 5s7.5-2 9-5" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v3" />
    <path d="M12 18v3" />
    <path d="M3 12h3" />
    <path d="M18 12h3" />
  </svg>
);

/**
 * 4. Periodontal Gum Health & Sulcus Depth Icon
 * Anatomical marginal gingiva and biological width preservation
 */
export const PeriodontalGumIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
    {...props}
  >
    <path d="M3 14c2.5-2 5.5-2 8 0 2.5 2 5.5 2 8 0 1-.8 1.8-1 2-1" />
    <path d="M3 18c2.5-2 5.5-2 8 0 2.5 2 5.5 2 8 0" />
    <path d="M12 4v6" />
    <path d="M9 7l3-3 3 3" />
    <circle cx="12" cy="14" r="1.5" fill="currentColor" />
  </svg>
);

/**
 * 5. Er,Cr:YSGG 2780nm Laser Beam & Hydrokinetic Energy Icon
 * Precise concentrated photon pulse and water atomization
 */
export const LaserBeamIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
    {...props}
  >
    <path d="M12 2v6" />
    <path d="M12 16v6" />
    <path d="M2 12h6" />
    <path d="M16 12h6" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M6.3 6.3l2.8 2.8" />
    <path d="M14.9 14.9l2.8 2.8" />
    <path d="M17.7 6.3l-2.8 2.8" />
    <path d="M9.1 14.9l-2.8 2.8" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

/**
 * 6. 3D Volumetric CBCT Diagnostics Icon
 * Multi-planar tomographic reconstruction cube & isotropic voxels
 */
export const Volumetric3DIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
    {...props}
  >
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 12v10" />
    <circle cx="12" cy="8" r="1.5" fill="currentColor" />
  </svg>
);

/**
 * 7. Micron Precision & Micro-restoration Icon
 * Sub-millimeter calliper metric and margin fidelity
 */
export const MicronPrecisionIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v3" />
    <path d="M12 18v3" />
    <path d="M3 12h3" />
    <path d="M18 12h3" />
    <path d="M9 12h6" />
    <path d="M12 9v6" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

/**
 * 8. Biological Stability & Biomimetic Regeneration Icon
 * Cellular tissue vitality and protective biomechanical shield
 */
export const BioStabilityIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

/**
 * 9. Functional Occlusion & Dynamic Equilibrium Icon
 * Anatomic bite balance and bilateral masticatory stability
 */
export const FunctionalOcclusionIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
    {...props}
  >
    <path d="M6 9h12" />
    <path d="M6 15h12" />
    <path d="M9 6v12" />
    <path d="M15 6v12" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path d="M3 12h18" strokeDasharray="2 2" />
  </svg>
);

/**
 * Helper to get the canonical icon for any clinical discipline ID
 */
export const getDisciplineIcon = (disciplineId: string): React.FC<IconProps> => {
  switch (disciplineId) {
    case 'periodontology':
      return PeriodontalGumIcon;
    case 'restorative':
      return DentalArchIcon;
    case 'endodontics':
      return LaserBeamIcon;
    case 'orthodontics':
      return JawAlignmentIcon;
    case 'gnathology':
      return FunctionalOcclusionIcon;
    case 'implantology':
      return BoneStructureIcon;
    case 'surgery':
      return MicronPrecisionIcon;
    case 'pediatric':
      return BioStabilityIcon;
    case 'aesthetic':
      return DentalArchIcon;
    case 'prevention':
      return BioStabilityIcon;
    default:
      return MicronPrecisionIcon;
  }
};
