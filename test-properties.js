/**
 * Property-Based Tests for Viral YouTube Hook Generator
 * 
 * These tests verify correctness properties from the spec:
 * - Property 1: generateHooks returns hooks for all niches
 * - Property 2: All hooks are non-empty strings  
 * - Property 3: Hooks incorporate the topic parameter
 * - Property 4: Hooks are distinct from each other
 */

/**
 * Generate random test topics for property testing
 */
function generateRandomTopic() {
  const topics = [
    'productivity', 'cooking', 'fitness', 'travel', 'photography',
    'programming', 'meditation', 'gaming', 'fashion', 'music',
    'art', 'business', 'investing', 'health', 'education',
    '',  // edge case: empty string
    '   ',  // edge case: whitespace  
    'a',  // edge case: single character
    'very long topic name that goes on and on with lots of words',
    '123',  // edge case: numbers
    'special!@#$characters',  // edge case: special chars
  ];
  return topics[Math.floor(Math.random() * topics.length)];
}

/**
 * Generate random niche for property testing
 */
function generateRandomNiche() {
  const niches = ['gaming', 'business', 'fitness', 'tech', 'lifestyle', 'education'];
  return niches[Math.floor(Math.random() * niches.length)];
}

/**
 * Property 1: generateHooks returns 6 hooks
 * Validates: Real app behavior - always returns 6 hooks
 */
function testProperty1_ReturnsCorrectNumberOfHooks() {
  console.log('\n🧪 Property Test 1: Always Returns 6 Hooks');
  console.log('='.repeat(60));
  
  const iterations = 100;
  let passCount = 0;
  let failCount = 0;
  const failures = [];
  
  for (let i = 0; i < iterations; i++) {
    const topic = generateRandomTopic();
    const niche = generateRandomNiche();
    
    // Skip empty topics
    if (!topic || topic.trim().length === 0) continue;
    
    const result = generateHooks(topic, niche);
    const expectedCount = 6; // Real app generates 6 hooks
    
    if (Array.isArray(result) && result.length === expectedCount) {
      passCount++;
    } else {
      failCount++;
      failures.push({
        iteration: i + 1,
        topic: topic,
        niche: niche,
        expected: expectedCount,
        actual: Array.isArray(result) ? result.length : 'not an array'
      });
    }
  }
  
  console.log(`✅ Passed: ${passCount}/${iterations}`);
  console.log(`❌ Failed: ${failCount}/${iterations}`);
  
  if (failures.length > 0) {
    console.log('\nFailure Details:');
    failures.slice(0, 5).forEach(f => {
      console.log(`  - Iteration ${f.iteration}: topic="${f.topic}", niche=${f.niche}, expected=${f.expected}, got=${f.actual}`);
    });
  }
  
  return failCount === 0;
}

/**
 * Property 2: All returned hooks are non-empty strings
 * Validates: Hooks contain actual content, not undefined/null/empty
 */
function testProperty2_AllHooksAreNonEmptyStrings() {
  console.log('\n🧪 Property Test 2: All Hooks Are Non-Empty Strings');
  console.log('='.repeat(60));
  
  const iterations = 100;
  let passCount = 0;
  let failCount = 0;
  const failures = [];
  
  for (let i = 0; i < iterations; i++) {
    const topic = generateRandomTopic();
    const niche = generateRandomNiche();
    
    // Skip empty topics
    if (!topic || topic.trim().length === 0) continue;
    
    const hooks = generateHooks(topic, niche);
    
    let allValid = true;
    const invalidHooks = [];
    
    hooks.forEach((hook, index) => {
      if (typeof hook !== 'string' || hook.trim().length === 0) {
        allValid = false;
        invalidHooks.push({ index, hook, type: typeof hook });
      }
    });
    
    if (allValid) {
      passCount++;
    } else {
      failCount++;
      failures.push({
        iteration: i + 1,
        topic: topic,
        niche: niche,
        invalidHooks: invalidHooks
      });
    }
  }
  
  console.log(`✅ Passed: ${passCount}/${iterations}`);
  console.log(`❌ Failed: ${failCount}/${iterations}`);
  
  if (failures.length > 0) {
    console.log('\nFailure Details:');
    failures.slice(0, 5).forEach(f => {
      console.log(`  - Iteration ${f.iteration}: topic="${f.topic}", niche=${f.niche}`);
      f.invalidHooks.forEach(h => {
        console.log(`    Hook ${h.index}: type=${h.type}, value="${h.hook}"`);
      });
    });
  }
  
  return failCount === 0;
}

/**
 * Property 3: All hooks incorporate the topic parameter
 * Validates: Template substitution works correctly
 */
function testProperty3_HooksIncorporateTopic() {
  console.log('\n🧪 Property Test 3: Hooks Incorporate Topic Parameter');
  console.log('='.repeat(60));
  
  const iterations = 100;
  let passCount = 0;
  let failCount = 0;
  const failures = [];
  
  for (let i = 0; i < iterations; i++) {
    const topic = generateRandomTopic();
    const niche = generateRandomNiche();
    
    // Skip edge cases where topic is empty/whitespace
    if (!topic || topic.trim().length === 0) {
      continue;
    }
    
    const hooks = generateHooks(topic, niche);
    
    let allIncorporate = true;
    const nonIncorporating = [];
    
    hooks.forEach((hook, index) => {
      if (!hook.includes(topic)) {
        allIncorporate = false;
        nonIncorporating.push(index);
      }
    });
    
    if (allIncorporate) {
      passCount++;
    } else {
      failCount++;
      failures.push({
        iteration: i + 1,
        topic: topic,
        niche: niche,
        nonIncorporating: nonIncorporating,
        hooks: hooks
      });
    }
  }
  
  console.log(`✅ Passed: ${passCount}/${iterations}`);
  console.log(`❌ Failed: ${failCount}/${iterations}`);
  
  if (failures.length > 0) {
    console.log('\nFailure Details:');
    failures.slice(0, 5).forEach(f => {
      console.log(`  - Iteration ${f.iteration}: topic="${f.topic}", niche=${f.niche}`);
      console.log(`    Hooks without topic: ${f.nonIncorporating.join(', ')}`);
    });
  }
  
  return failCount === 0;
}

/**
 * Property 4: Hooks are distinct from each other within a niche
 * Validates: Template variety ensures different hooks
 */
function testProperty4_HooksAreDistinct() {
  console.log('\n🧪 Property Test 4: All Hooks Within Niche Are Distinct');
  console.log('='.repeat(60));
  
  const iterations = 100;
  let passCount = 0;
  let failCount = 0;
  const failures = [];
  
  for (let i = 0; i < iterations; i++) {
    const topic = generateRandomTopic();
    const niche = generateRandomNiche();
    
    // Skip empty topics
    if (!topic || topic.trim().length === 0) continue;
    
    const hooks = generateHooks(topic, niche);
    
    const uniqueHooks = new Set(hooks);
    const isDistinct = uniqueHooks.size === hooks.length;
    
    if (isDistinct) {
      passCount++;
    } else {
      failCount++;
      failures.push({
        iteration: i + 1,
        topic: topic,
        niche: niche,
        hooks: hooks,
        uniqueCount: uniqueHooks.size,
        totalCount: hooks.length
      });
    }
  }
  
  console.log(`✅ Passed: ${passCount}/${iterations}`);
  console.log(`❌ Failed: ${failCount}/${iterations}`);
  
  if (failures.length > 0) {
    console.log('\nFailure Details:');
    failures.slice(0, 5).forEach(f => {
      console.log(`  - Iteration ${f.iteration}: topic="${f.topic}", niche=${f.niche}`);
      console.log(`    Unique hooks: ${f.uniqueCount}/${f.totalCount}`);
    });
  }
  
  return failCount === 0;
}

/**
 * Run all property tests
 */
function runAllPropertyTests() {
  console.log('\n' + '='.repeat(60));
  console.log('🚀 PROPERTY-BASED TEST SUITE: Viral Hook Generator');
  console.log('='.repeat(60));
  
  const results = {
    property1: testProperty1_ReturnsCorrectNumberOfHooks(),
    property2: testProperty2_AllHooksAreNonEmptyStrings(),
    property3: testProperty3_HooksIncorporateTopic(),
    property4: testProperty4_HooksAreDistinct()
  };
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 FINAL RESULTS');
  console.log('='.repeat(60));
  
  const passed = Object.values(results).filter(r => r).length;
  const total = Object.keys(results).length;
  
  console.log(`Property 1 (Returns 6 hooks): ${results.property1 ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Property 2 (Non-empty strings): ${results.property2 ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Property 3 (Incorporates topic): ${results.property3 ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Property 4 (Distinct hooks): ${results.property4 ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`\n🎯 Overall: ${passed}/${total} properties satisfied`);
  console.log('='.repeat(60));
  
  return passed === total;
}

// Export for use in browser console or Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    runAllPropertyTests,
    testProperty1_AlwaysReturnsThreeHooks,
    testProperty2_AllHooksAreNonEmptyStrings,
    testProperty3_HooksIncorporateTopic,
    testProperty4_HooksAreDistinct
  };
}
