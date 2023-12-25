import { useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, RenderPass, BloomEffect } from 'postprocessing';
import { useRef } from 'react';

const TestLigth = () => {
    const { gl, scene, camera } = useThree();
  
    // Create render pass
    const renderPass = new RenderPass(scene, camera);
  
    // Create bloom effect
    const bloomEffect = new BloomEffect();
  
    // Add render pass and bloom effect to the composer
    const composer = useRef();
    useFrame(() => composer.current.render(), 1);
    return (
      <>
        {/* Your 3D scene components */}
        <effectComposer ref={composer} args={[gl]}>
          {renderPass}
          <bloomPass attachArray="passes" args={[1, 25, 4, 512]} renderToScreen />
        </effectComposer>
      </>
    );
  };
export default TestLigth;